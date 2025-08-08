import type { User } from "../types/users";
import { conSettings } from "./conSettings";

interface UserListFetchObjType {
  domain: string;
  conErr: string;
  protocol: string;
  getAllUsers: (term?: string) => Promise<User[] | string>;
}

export const UserListFetchObj: UserListFetchObjType = {
  //Prepositions
  domain: conSettings.domain,
  conErr: "Connection error acquired, we are sorry",
  protocol: conSettings.conProtocol,
  //Functions
  getAllUsers: async function (term?: string): Promise<User[] | string> {
    try {
      const url = new URL(`${this.protocol}://${this.domain}/`);
      if (term) {
        url.searchParams.set("term", term);
      }

      const res = await fetch(url.toString(), {
        method: "GET",
        mode: "cors",
        credentials: "omit",
      });

      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

      const json = await res.json();

      if (!json.success || !Array.isArray(json.data)) {
        throw new Error("Invalid response format");
      }

      return json.data;
    } catch (error) {
      console.error("Fetch error:", error);
      return this.conErr;
    }
  },
};
