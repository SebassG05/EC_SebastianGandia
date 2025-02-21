import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-shoe-configurator',
  templateUrl: './custom-shoe-configurator.component.html',
  styleUrls: ['./custom-shoe-configurator.component.css'],
  standalone: true,
  imports: [FormsModule] // 👈 Asegúrate de incluir FormsModule aquí
})
export class CustomShoeConfiguratorComponent implements AfterViewInit {
  @ViewChild('shoeCanvas', { static: true }) shoeCanvas!: ElementRef;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  ballModel!: THREE.Object3D;
  selectedColor: string = '#ff6600'; // Color inicial (naranja)

  ngAfterViewInit() {
    this.initScene();
    this.loadBasketballModel();
    this.animate();
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000); // Fondo negro

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
      this.ballModel.scale.set(5, 5, 5);
      this.ballModel.position.set(0, 1, 0);
      this.scene.background = new THREE.Color(0xd3d3d3); // Gris claro (Código HEX)


      // Cargar texturas correctamente
      const textureLoader = new THREE.TextureLoader();
      const baseColor = textureLoader.load('assets/models/ball_ball_BaseColor.png');
      const normalMap = textureLoader.load('assets/models/ball_ball_Normal.png');
      const roughnessMap = textureLoader.load('assets/models/ball_ball_Roughness.png');

      this.ballModel.traverse((child: any) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            map: baseColor,       // Textura principal con líneas negras
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
  addToCart() {
    console.log('Balón añadido al carrito con color:', this.selectedColor);
    alert('¡Balón añadido al carrito!');
  }

}
