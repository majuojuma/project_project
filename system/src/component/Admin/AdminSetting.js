import React, { useState } from 'react';
import Nav from '../Navigation/Nav';

const AdminSettings = () => {
    const [view, setView] = useState('menu');

    const renderView = () => {
        switch (view) {
            case 'menu':
                return <Menu />;
            case 'logout':
                return <Logout />;
            case 'login':
                return <Login />;
            case 'customize':
                return <Customize />;
            case 'deleteAccount':
                return <DeleteAccount />;
            case 'updateAccount':
                return <UpdateAccount />;
            case 'createAccount':
                return <CreateAccount />;
            default:
                return <Menu />;
        }
    };

    return (
       <><Nav />
        <div className="admin-settings" style={{marginLeft:"15%", marginTop:"105px"}}>
            <nav className="settings-menu">
                <button onClick={() => setView('menu')}>Menu</button>
                <button onClick={() => setView('logout')}>Logout</button>
                <button onClick={() => setView('login')}>Login</button>
                <button onClick={() => setView('customize')}>Customize</button>
                <button onClick={() => setView('deleteAccount')}>Delete Account</button>
                <button onClick={() => setView('updateAccount')}>Update Account</button>
                <button onClick={() => setView('createAccount')}>Create New Account</button>
            </nav>
            <div className="settings-content">
                {renderView()}
            </div>
        </div>
        </>
        
    );
};

const Menu = () => (
    <div>
        <h2>Menu</h2>
        <p>Select an option from the menu to manage settings.</p>
    </div>
);

const Logout = () => (
    <div>
        <h2>Logout</h2>
        <p>You have been logged out.</p>
    </div>
);

const Login = () => (
    <div>
        <h2>Login</h2>
        <form>
            <label>
                Username:
                <input type="text" required />
            </label>
            <label>
                Password:
                <input type="password" required />
            </label>
            <button type="submit">Login</button>
        </form>
    </div>
);

const Customize = () => (
    <div>
        <h2>Customize</h2>
        <p>Customize your settings here.</p>
    </div>
);

const DeleteAccount = () => (
    <div>
        <h2>Delete Account</h2>
        <form>
            <label>
                Username:
                <input type="text" required />
            </label>
            <button type="submit">Delete Account</button>
        </form>
    </div>
);

const UpdateAccount = () => (
    <div>
        <h2>Update Account</h2>
        <form>
            <label>
                Username:
                <input type="text" required />
            </label>
            <label>
                New Password:
                <input type="password" required />
            </label>
            <button type="submit">Update Account</button>
        </form>
    </div>
);

const CreateAccount = () => (
    <div>
        <h2>Create New Account</h2>
        <form>
            <label>
                Username:
                <input type="text" required />
            </label>
            <label>
                Password:
                <input type="password" required />
            </label>
            <button type="submit">Create Account</button>
        </form>
    </div>
);

export default AdminSettings;
