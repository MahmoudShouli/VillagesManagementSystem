/* eslint-disable react/prop-types */
import profileImage from '../assets/profile.png'
import { useEffect, useState } from "react"
import { useQuery, gql } from '@apollo/client'
import { useAdmin } from "../AdminContext"

const GET_ADMINS = gql`
    query getAllAdmins {
        admins {
            id
            fullName
        }
    }
`;

function Admins({ onAdminSelect, searchVal = "" }) {

    const {admin: currentAdmin} = useAdmin()

    const [admins, setAdmins] = useState([]);

    
    const { loading, error, data } = useQuery(GET_ADMINS)


    useEffect(() => {
        if (data && Array.isArray(data.admins)) {
            setAdmins(data.admins)
        }
    }, [data])

    if (loading) return <p className="text-white">Loading...</p>
    if (error) return <p className="text-red-500">Error: {error.message}</p>


    const filteredAdmins = admins.filter((admin) =>
        admin.fullName.toLowerCase().includes(searchVal.toLowerCase()) && admin.fullName != currentAdmin
    )

    return (
        <div className="bg-secondary rounded m-3.5 p-3.5">
            <h2 className="text-white mb-2.5 text-2xl">Available Admins</h2>
            <div className="flex flex-row justify-start items-center space-x-6">
                {filteredAdmins.map((admin) => (
                    <button
                        key={admin.id}
                        className="flex flex-col items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
                        onClick={() => onAdminSelect(admin.fullName)}
                    >
                        <img
                            src={profileImage}
                            alt={admin.fullName}
                            className="rounded-full w-16 h-16 mb-2"
                        />
                        <span className="text-white text-sm">{admin.fullName}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Admins;
