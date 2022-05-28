import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [mydata, setMyData] = useState({});

    const { isLoading, data } = useQuery('repoDaata', () =>
        fetch('https://fast-wildwood-48661.herokuapp.com/users').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    const myInfo = data?.find(data => data.userEmail === user.email)

    const handleUser = (event) => {
        const newUser = {
            userName: user.displayName,
            userEmail: user.email,
            userEducation: event.target.education.value ? event.target.education.value : myInfo.userEducation,

            userAddress: event.target.address.value ? event.target.address.value : myInfo.userAddress,

            userMobile: event.target.mobile.value ? event.target.mobile.value : myInfo.userMobile,

            userImage: event.target.image.value ? event.target.image.value : myInfo.userImage,

            userLinkedInProfile: event.target.linkedin.value ? event.target.linkedin.value : myInfo.userLinkedInProfile,
        }

        fetch(`https://fast-wildwood-48661.herokuapp.com/users/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => setMyData(data))
    }

    return (
        <div className='md:flex gap-4 mt-8'>
            <div className='text-left p-6'>
                <div className="flex mb-4 gap-5">
                    <img src={myInfo.userImage ? myInfo.userImage : 'https://i.ibb.co/N1f3BSD/avatar.png'} className='w-12' alt="user avatar" />
                    <div>
                        <h3 className='font-semibold text-xl'>{user.displayName}</h3>
                        <h3 className='text-xs'>{user.email}</h3>
                    </div>
                </div>
                <h3 className='font-bold'>Education</h3>
                <p className='mb-4'>{myInfo.userEducation}</p>
                <h3 className='font-bold'>Address</h3>
                <p className='mb-4'>{myInfo.userAddress}</p>
                <h3 className='font-bold'>Phone Number </h3>
                <p className='mb-4'>{myInfo.userMobile}</p>
                <h3 className='font-bold'>Linked in Profile</h3>
                <p className='mb-4'>{myInfo.userLinkedInProfile}</p>
            </div>

            <div className='bg-base-200 text-left rounded-lg shadow-lg p-8'>
                <h1 className='font-bold text-neutral text-2xl my-5'>Update your profile</h1>
                <form onSubmit={handleUser}>
                    <div class="form-control w-full max-w-xs mb-4">
                        <label class="label">
                            <span class="label-text">Your Education</span>

                        </label>
                        <input type="text" placeholder="Education" name='education' class="input input-bordered w-full max-w-xs" />

                    </div>
                    <div class="form-control w-full max-w-xs mb-4">
                        <label class="label">
                            <span class="label-text">Your Location</span>

                        </label>
                        <input type="text" placeholder="Address" class="input input-bordered w-full max-w-xs" name='address' />

                    </div>
                    <div class="form-control w-full max-w-xs mb-4">
                        <label class="label">
                            <span class="label-text">Your Phone Number</span>

                        </label>
                        <input name='mobile' type="tel" placeholder="Number" class="input input-bordered w-full max-w-xs" />

                    </div>
                    <div class="form-control w-full max-w-xs mb-4">
                        <label class="label">
                            <span class="label-text">Your Linkedin profile</span>

                        </label>
                        <input type="text" name='linkedin' placeholder="Linkedin" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text">Your profile image</span>

                        </label>
                        <input name='image' type="text" placeholder="Online url of image" class="input input-bordered w-full max-w-xs" />

                    </div>
                    <input type="submit" value="Submit" className='btn btn-secondary' />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;