import type { User } from '../types/users';
import './UserModal.css';

interface UserModalProps {
    user: User;
    onClose: () => void;
}

const UserModal = ({ user, onClose }: UserModalProps) => {
    const fields = [
        { label: 'Position', value: user.position_name },
        { label: 'Department', value: user.department },
        { label: 'Email', value: user.email },
        { label: 'Phone', value: user.phone },
        { label: 'Address', value: user.address },
        { label: 'Hire Date', value: new Date(user.hire_date).toLocaleDateString() }
    ];

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                <h2>{user.name}</h2>
                {fields.map((f) => (
                    <p key={f.label}>
                        <strong>{f.label}:</strong> {f.value}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default UserModal;
