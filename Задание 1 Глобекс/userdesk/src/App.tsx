import { useState } from 'react';
import Searchbar from './components/Searchbar';
import UserArray from './components/UserArray';
import UserModal from './components/UserModal';
import type { User } from './types/users';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    return (
        <>
            <Searchbar value={searchTerm} onChange={setSearchTerm} />
            <UserArray searchTerm={searchTerm} onSelectUser={setSelectedUser} />
            {selectedUser && (
                <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
            )}
        </>
    );
}

export default App;
