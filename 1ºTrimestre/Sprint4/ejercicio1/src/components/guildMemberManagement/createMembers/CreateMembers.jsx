import React, { useState, useEffect } from 'react';
import NotificationSystem from '../../general/notificationSystem/NotificationSystem';
import { validateForm, handleChange, handleBlur, handleSubmit } from '../../general/validationSystem/ValidationSystem';

const CreateMembers = ({ onSave, onClose, members }) => {
  const [formData, setFormData] = useState({
    user_id: '',
    username: '',
    level: '',
    ilvl: '',
    character_role: 'TANK',
    guild_role: 'MEMBER',
    main_archetype: 'BARD',
    secondary_archetype: 'BARD',
    grandmaster_profession_one: 'FISHING',
    grandmaster_profession_two: 'FISHING',
    join_date: '',
    last_activity_date: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    validateForm(formData, setErrors, setIsFormValid, setNotification);
  }, [formData]);

  return (
    <div className="modal">
      <h2>Create Member</h2>
      <NotificationSystem message={notification} />
      <form onSubmit={(e) => handleSubmit(e, formData, isFormValid, members, onSave, setNotification)}>
        <label>
          User ID:
          <input type="text" name="user_id" value={formData.user_id} onChange={(e) => handleChange(e, setFormData, members, setErrors, setNotification)} onBlur={(e) => handleBlur(e, formData, members, setErrors, setNotification)} />
          {errors.user_id && <NotificationSystem message={errors.user_id} />}
        </label>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={(e) => handleChange(e, setFormData, members, setErrors, setNotification)} />
        </label>
        <label>
          Level:
          <input type="number" name="level" value={formData.level} onChange={(e) => handleChange(e, setFormData, members, setErrors, setNotification)} />
          {errors.level && <NotificationSystem message={errors.level} />}
        </label>
        <label>
          ILVL:
          <input type="number" name="ilvl" value={formData.ilvl} onChange={(e) => handleChange(e, setFormData, members, setErrors, setNotification)} />
          {errors.ilvl && <NotificationSystem message={errors.ilvl} />}
        </label>
        <label>
          Character Role:
          <select name="character_role" value={formData.character_role} onChange={(e) => handleChange(e, setFormData, members, setErrors, setNotification)}>
            <option value="TANK">TANK</option>
            <option value="HEALER">HEALER</option>
            <option value="DAMAGE">DAMAGE</option>
            <option value="SUPPORT">SUPPORT</option>
          </select>
        </label>
        <label>
          Guild Role:
          <select name="guild_role" value={formData.guild_role} onChange={(e) => handleChange(e, setFormData, members, setErrors, setNotification)}>
            <option value="LIDER">LIDER</option>
            <option value="GERENTE SENIOR">GERENTE SENIOR</option>
            <option value="GERENTE">GERENTE</option>
            <option value="GERENTE A2">GERENTE A2</option>
            <option value="ALPHA 2">ALPHA 2</option>
            <option value="MEMBER">MEMBER</option>
          </select>
        </label>
        <label>
          Main Archetype:
          <select name="main_archetype" value={formData.main_archetype} onChange={(e) => handleChange(e, setFormData, members, setErrors, setNotification)}>
            <option value="BARD">BARD</option>
            <option value="CLERIC">CLERIC</option>
            <option value="FIGHTER">FIGHTER</option>
            <option value="MAGE">MAGE</option>
            <option value="RANGER">RANGER</option>
            <option value="ROGUE">ROGUE</option>
            <option value="SUMMONER">SUMMONER</option>
            <option value="TANK">TANK</option>
          </select>
        </label>
        <label>
          Secondary Archetype:
          <select name="secondary_archetype" value={formData.secondary_archetype} onChange={(e) => handleChange(e, setFormData, members, setErrors, setNotification)}>
            <option value="BARD">BARD</option>
            <option value="CLERIC">CLERIC</option>
            <option value="FIGHTER">FIGHTER</option>
            <option value="MAGE">MAGE</option>
            <option value="RANGER">RANGER</option>
            <option value="ROGUE">ROGUE</option>
            <option value="SUMMONER">SUMMONER</option>
            <option value="TANK">TANK</option>
          </select>
        </label>
        <label>
          Grandmaster Profession One:
          <select name="grandmaster_profession_one" value={formData.grandmaster_profession_one} onChange={(e) => handleChange(e, setFormData, members, setErrors, setNotification)}>
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
        </label>
        <label>
          Grandmaster Profession Two:
          <select name="grandmaster_profession_two" value={formData.grandmaster_profession_two} onChange={(e) => handleChange(e, setFormData, members, setErrors, setNotification)}>
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
        </label>
        <label>
          Join Date:
          <input type="date" name="join_date" value={formData.join_date} onChange={(e) => handleChange(e, setFormData, members, setErrors, setNotification)} />
        </label>
        <label>
          Last Activity Date:
          <input type="date" name="last_activity_date" value={formData.last_activity_date} onChange={(e) => handleChange(e, setFormData, members, setErrors, setNotification)} />
        </label>
        <button type="submit" disabled={!isFormValid}>Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default CreateMembers;
