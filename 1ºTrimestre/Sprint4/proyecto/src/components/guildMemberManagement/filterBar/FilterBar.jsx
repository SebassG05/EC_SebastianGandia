import React from 'react';
import './FilterBar.css';

const FilterBar = ({ filter, handleFilterChange }) => {
  return (
    <div className="filter-bar">
      <select name="character_role" value={filter.character_role} onChange={handleFilterChange}>
        <option value="">Filter by Character Role</option>
        <option value="TANK">TANK</option>
        <option value="HEALER">HEALER</option>
        <option value="DAMAGE">DAMAGE</option>
        <option value="SUPPORT">SUPPORT</option>
      </select>
      <select name="guild_role" value={filter.guild_role} onChange={handleFilterChange}>
        <option value="">Filter by Guild Role</option>
        <option value="LIDER">LIDER</option>
        <option value="GERENTE SENIOR">GERENTE SENIOR</option>
        <option value="GERENTE">GERENTE</option>
        <option value="GERENTE A2">GERENTE A2</option>
        <option value="ALPHA 2">ALPHA 2</option>
        <option value="MEMBER">MEMBER</option>
      </select>
      <select name="main_archetype" value={filter.main_archetype} onChange={handleFilterChange}>
        <option value="">Filter by Main Archetype</option>
        <option value="BARD">BARD</option>
        <option value="CLERIC">CLERIC</option>
        <option value="FIGHTER">FIGHTER</option>
        <option value="MAGE">MAGE</option>
        <option value="RANGER">RANGER</option>
        <option value="ROGUE">ROGUE</option>
        <option value="SUMMONER">SUMMONER</option>
        <option value="TANK">TANK</option>
      </select>
      <select name="secondary_archetype" value={filter.secondary_archetype} onChange={handleFilterChange}>
        <option value="">Filter by Secondary Archetype</option>
        <option value="BARD">BARD</option>
        <option value="CLERIC">CLERIC</option>
        <option value="FIGHTER">FIGHTER</option>
        <option value="MAGE">MAGE</option>
        <option value="RANGER">RANGER</option>
        <option value="ROGUE">ROGUE</option>
        <option value="SUMMONER">SUMMONER</option>
        <option value="TANK">TANK</option>
      </select>
      <select name="grandmaster_profession_one" value={filter.grandmaster_profession_one} onChange={handleFilterChange}>
        <option value="">Filter by Grandmaster Profession One</option>
        <option value="FISHING">FISHING</option>
        <option value="HERBALISM">HERBALISM</option>
        <option value="HUNTING">HUNTING</option>
        <option value="LUMBERJACKING">LUMBERJACKING</option>
        <option value="MINING">MINING</option>
        <option value="ALCHEMY">ALCHEMY</option>
        <option value="ANIMALHUSBANDRY">ANIMALHUSBANDRY</option>
        <option value="COOKING">COOKING</option>
        <option value="FARMING">FARMING</option>
        <option value="LUMBERMILLING">LUMBERMILLING</option>
        <option value="METALWORKING">METALWORKING</option>
        <option value="STONECUTTING">STONECUTTING</option>
        <option value="TANNING">TANNING</option>
        <option value="WEAVING">WEAVING</option>
        <option value="ARCANEENGINEERING">ARCANEENGINEERING</option>
        <option value="ARMORSMITHING">ARMORSMITHING</option>
        <option value="CARPENTRY">CARPENTRY</option>
        <option value="JEWELCUTTING">JEWELCUTTING</option>
        <option value="LEATHERWORKING">LEATHERWORKING</option>
        <option value="SCRIBE">SCRIBE</option>
        <option value="TAILORING">TAILORING</option>
        <option value="WEAPONSMITHING">WEAPONSMITHING</option>
      </select>
      <select name="grandmaster_profession_two" value={filter.grandmaster_profession_two} onChange={handleFilterChange}>
        <option value="">Filter by Grandmaster Profession Two</option>
        <option value="FISHING">FISHING</option>
        <option value="HERBALISM">HERBALISM</option>
        <option value="HUNTING">HUNTING</option>
        <option value="LUMBERJACKING">LUMBERJACKING</option>
        <option value="MINING">MINING</option>
        <option value="ALCHEMY">ALCHEMY</option>
        <option value="ANIMALHUSBANDRY">ANIMALHUSBANDRY</option>
        <option value="COOKING">COOKING</option>
        <option value="FARMING">FARMING</option>
        <option value="LUMBERMILLING">LUMBERMILLING</option>
        <option value="METALWORKING">METALWORKING</option>
        <option value="STONECUTTING">STONECUTTING</option>
        <option value="TANNING">TANNING</option>
        <option value="WEAVING">WEAVING</option>
        <option value="ARCANEENGINEERING">ARCANEENGINEERING</option>
        <option value="ARMORSMITHING">ARMORSMITHING</option>
        <option value="CARPENTRY">CARPENTRY</option>
        <option value="JEWELCUTTING">JEWELCUTTING</option>
        <option value="LEATHERWORKING">LEATHERWORKING</option>
        <option value="SCRIBE">SCRIBE</option>
        <option value="TAILORING">TAILORING</option>
        <option value="WEAPONSMITHING">WEAPONSMITHING</option>
      </select>
      <input
        type="number"
        name="minlevel"
        value={filter.minlevel}
        onChange={handleFilterChange}
        placeholder="Min Level"
      />
      <input
        type="number"
        name="maxlevel"
        value={filter.maxlevel}
        onChange={handleFilterChange}
        placeholder="Max Level"
      />
      <input
        type="number"
        name="minilvl"
        value={filter.minilvl}
        onChange={handleFilterChange}
        placeholder="Min iLevel"
      />
      <input
        type="number"
        name="maxilvl"
        value={filter.maxilvl}
        onChange={handleFilterChange}
        placeholder="Max iLevel"
      />
    </div>
  );
};

export default FilterBar;
