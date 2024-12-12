import axios from 'axios';

const API_URL = 'http://localhost:3000/guildmembers';

export const fetchMembers = async () => {
  const response = await axios.get(API_URL);
  return response.data.map(member => ({
    ...member,
    user_id: parseInt(member.user_id, 10),
  }));
};

export const createMember = async (member) => {
  const response = await axios.post(API_URL, member);
  return response.data;
};

export const updateMember = async (user_id, member) => {
  const response = await axios.put(`${API_URL}/${user_id}`, member);
  return response.data;
};

export const deleteMember = async (user_id) => {
  await axios.delete(`${API_URL}/${user_id}`);
};

export const batchDeleteMembers = async (user_ids) => {
  await Promise.all(user_ids.map(user_id => axios.delete(`${API_URL}/${user_id}`)));
};

export const batchChangeRole = async (user_ids, newRole) => {
  await Promise.all(user_ids.map(user_id => axios.put(`${API_URL}/${user_id}`, { guild_role: newRole })));
};


export const updateMemberFail = async (user_id, member) => {
  throw new Error('Failed to update member');
};