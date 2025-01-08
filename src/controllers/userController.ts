import { User } from '../models/UserModel';

export const loginUser = async (email: string, password: string): Promise<User> => {
  // Simulate API call
  return { id: '1', name: 'John Doe', email, role: 'student' };
};
