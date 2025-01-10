/* eslint-disable react/prop-types */
import profileImage from '../assets/profile.png';
import { useState } from "react";

function Admins({ onAdminSelect, searchVal }) {
    const [admins] = useState([
        { name: "Admin1", image: profileImage, id: 1 },
        { name: "Admin2", image: profileImage, id: 2 },
        { name: "Admin3", image: profileImage, id: 3 }
    ]);


    const filteredAdmins = admins.filter((admin) =>
        admin.name.toLowerCase().includes(searchVal.toLowerCase())
    );

    return (
        <div className='bg-secondary rounded m-3.5 p-3.5'>
            <h2 className='text-white mb-2.5 text-2xl'>Available Admins</h2>
            <div className='flex flex-row justify-start items-center space-x-6'>
                {filteredAdmins.map(admin => (
                    <button
                        key={admin.id}
                        className='flex flex-col items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition'
                        onClick= { () => onAdminSelect(admin.name)}
                    >
                        <img src={admin.image} alt={admin.name} className='rounded-full w-16 h-16 mb-2' />
                        <span className='text-white text-sm'>{admin.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Admins;
