export { auth, type Session, type User } from "./config";
export {
  signInWithMyKad,
  signOut,
  validateMyKadNumber,
  isMyKadRegistered,
  type AuthResult,
} from "./actions";
export {
  validateMyKad,
  generateDisplayName,
  mykadAuthSchema,
  type MyKadValidationResult,
  type MyKadAuthInput,
} from "./mykad-plugin";
