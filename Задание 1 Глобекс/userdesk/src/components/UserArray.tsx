import { useUsers } from "../hooks/useUsers";
import type { User } from "../types/users";
import UserCard from "./UserCard";
import "./UserArray.css";

interface Props {
    searchTerm: string;
    onSelectUser: (user: User) => void;
}

const UserArray = ({ searchTerm, onSelectUser }: Props) => {
    const userList = useUsers(searchTerm);

    return (
        <div className="card">
            {userList.map((user) => (
                <UserCard
                    key={user.id}
                    user={user}
                    onClick={() => onSelectUser(user)}
                />
            ))}
        </div>
    );
};

export default UserArray;
