import type { User } from "../types/users";
import ContactItem from "./ContactItem";
import envelope from "../icons/envelope.png";
import phone from "../icons/smartphone-call.png";
import "./UserArray.css";

interface Props {
    user: User;
    onClick: () => void;
}

const UserCard = ({ user, onClick }: Props) => (
    <div className="user-card" onClick={onClick}>
        <h3>{user.name}</h3>
        <div className="info">
            <ContactItem icon={envelope} href={`mailto:${user.email}`} text={user.email} />
            <ContactItem icon={phone} href={`tel:${user.phone}`} text={user.phone} />
        </div>
    </div>
);

export default UserCard;
