import { useState, useEffect } from "react";
import { UserListFetchObj } from "../scripts/userList";
import type { User } from "../types/users";

export function useUsers(searchTerm: string) {
    const [userList, setUserList] = useState<User[]>([]);

    useEffect(() => {
        const timeout = setTimeout(async () => {
            const res = await UserListFetchObj.getAllUsers(searchTerm || undefined);
            if (Array.isArray(res)) {
                setUserList(res);
            } else {
                console.error("Ошибка загрузки пользователей:", res);
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [searchTerm]);

    return userList;
}
