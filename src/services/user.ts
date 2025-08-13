import { IUserDto } from "@/types/User";
import { HTTP } from "./https";

export const getUser = () => {
  return HTTP.get<IUserDto>("/mocks/getUser.json");
};
