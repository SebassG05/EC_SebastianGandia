import { Component, ElementRef, AfterViewInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { ServiceService, Shoe } from '../../service/service.service'; // Importa el servicio

@Component({
  selector: 'app-custom-shoe-configurator',
  templateUrl: './custom-shoe-configurator.component.html',
  styleUrls: ['./custom-shoe-configurator.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent]
})
export class CustomShoeConfiguratorComponent implements AfterViewInit {
  @ViewChild('shoeCanvas', { static: true }) shoeCanvas!: ElementRef;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  ballModel!: THREE.Object3D;
  selectedColor: string = '#ff6600'; // Color inicial
  selectedSticker: string = 'sticker1'; // Sticker seleccionado
  stickerTextures: { [key: string]: string } = {
    sticker1: 'assets/stickers/sticker1.png',
    sticker2: 'assets/stickers/sticker2.png',
    sticker3: 'assets/stickers/sticker3.png',
  };

  stepTwoActive: boolean = false;
  stickers: { texture: string, x: number, y: number, width: number, height: number }[] = [];

  constructor(private serviceService: ServiceService, @Inject(PLATFORM_ID) private platformId: Object) {} // Inyecta el servicio y el PLATFORM_ID

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScene();
      this.loadBasketballModel();
      this.animate();
    }
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xd3d3d3); // Fondo gris claro

    // Configurar cámara
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    this.camera.position.set(0, 1, 3);

    // Configurar renderizador
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(400, 400);
    this.shoeCanvas.nativeElement.appendChild(this.renderer.domElement);

    // Luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 2);
    this.scene.add(directionalLight);
  }

  loadBasketballModel() {
    const loader = new OBJLoader();
    loader.load('assets/models/basketball.obj', (obj) => {
      this.ballModel = obj;
      console.log("Modelo de balón cargado", this.ballModel); // Agregado para ver si el modelo se carga correctamente
      this.ballModel.scale.set(5, 5, 5);
      this.ballModel.position.set(0, 1, 0);

      const textureLoader = new THREE.TextureLoader();
      const baseColor = textureLoader.load('assets/models/ball_ball_BaseColor.png');
      const normalMap = textureLoader.load('assets/models/ball_ball_Normal.png');
      const roughnessMap = textureLoader.load('assets/models/ball_ball_Roughness.png');

      this.ballModel.traverse((child: any) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            map: baseColor, // Textura principal con líneas negras
            normalMap: normalMap, // Relieve
            roughnessMap: roughnessMap,
            roughness: 0.5,
            metalness: 0.2,
          });
        }
      });

      this.scene.add(this.ballModel);
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    if (this.ballModel) {
      this.ballModel.rotation.y += 0.01;
    }
    this.renderer.render(this.scene, this.camera);
  }

  changeColor() {
    if (this.ballModel) {
      this.ballModel.traverse((child: any) => {
        if (child.isMesh) {
          child.material.color.set(this.selectedColor);
        }
      });
    }
  }

  goToNextStep() {
    this.stepTwoActive = true; // Cambia la variable a true para pasar al siguiente paso
  }

  addStickerToBall() {
    if (!this.ballModel) {
      console.error("El modelo de la pelota aún no está cargado.");
      return; // Si el modelo no está cargado, no continuamos
    }

    // Añadir la pegatina a la lista de pegatinas
    const stickerPosition = this.stickers.length % 2 === 0 ? { x: 500, y: 650 } : { x: 500, y: 30 };
    this.stickers.push({
      texture: this.stickerTextures[this.selectedSticker],
      x: stickerPosition.x,
      y: stickerPosition.y,
      width: 100,
      height: 100
    });

    // Crear un canvas para combinar las texturas
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const context = canvas.getContext('2d');

    // Dibujar la textura base
    const baseImage = new Image();
    baseImage.src = 'assets/models/ball_ball_BaseColor.png';
    baseImage.onload = () => {
      context?.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

      // Dibujar todas las pegatinas en sus posiciones específicas
      this.stickers.forEach(sticker => {
        const stickerImage = new Image();
        stickerImage.src = sticker.texture;
        stickerImage.onload = () => {
          context?.drawImage(stickerImage, sticker.x, sticker.y, sticker.width, sticker.height);

          // Crear una nueva textura a partir del canvas
          const combinedTexture = new THREE.CanvasTexture(canvas);

          // Aplicar la nueva textura al material de la pelota
          this.ballModel.traverse((child: any) => {
            if (child.isMesh) {
              child.material.map = combinedTexture;
              child.material.needsUpdate = true;
            }
          });

          console.log('Pegatina añadida al balón');
          alert('¡Pegatina añadida al balón!');
        };
      });
    };
  }

  addToCart() {
    const customBall: Shoe = {
      id: 'custom-ball',
      name: 'Custom Ball',
      color: this.selectedColor,
      stickers: this.stickers.map(sticker => sticker.texture),
      brand: 'Custom Brand', // Valor predeterminado
      price: 50, // Valor predeterminado
      image: 'assets/images/ball.png', // Valor predeterminado
      description: 'Personalización de una pelota de baloncesto.', // Valor predeterminado
      bestSeller: false, // Valor predeterminado
      category: 'Basketball', // Valor predeterminado
      rating: 0 // Valor predeterminado
    };

    this.serviceService.addToCart(customBall).subscribe(() => {
      console.log('Balón añadido al carrito con color', this.selectedColor);
      alert('¡Balón añadido al carrito!');
    });
  }
}
