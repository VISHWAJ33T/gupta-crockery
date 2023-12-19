import React from 'react'
import Link from "next/link";
const UserPopup = ({Admins, user, handleSignOut}) => {
  return (
    <>
    <div className="infos">
            <div
              className="image"
              style={{ backgroundImage: `url(${user.photoURL})` }}
            ></div>
            <div className="info">
              <div>
                <p className="name">{user.displayName}</p>
                <p className="function">{user.email}</p>
                {user.phoneNumber && (
                  <p className="function">{user.phoneNumber}</p>
                )}
                {/* <p className="function">
                  Account created on&nbsp;
                  {convertToIST(user.metadata.creationTime)}
                </p>
                <p className="function">
                  Last login at &nbsp;
                  {convertToIST(user.metadata.lastSignInTime)}
                </p> */}
              </div>
            </div>
          </div>
          <button
            onClick={() => handleSignOut()}
            className="cartbtn"
            type="button"
          >
            <div className="sign">
              <svg viewBox="0 0 512 512">
                <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
              </svg>
            </div>
            <p className="text">Sign Out</p>
          </button>
          {Admins && Admins.includes(user.email) && (
            <>
              <Link
                href={`${process.env.NEXT_PUBLIC_URL}/Admin729`}
                className="cartbtn"
                type="button"
              >
                <p className="text">Admin Panel</p>
              </Link>
              <Link
                href={`${process.env.NEXT_PUBLIC_URL}/Admin729/createItem`}
                className="cartbtn"
                type="button"
              >
                <p className="text">Create a new Item</p>
              </Link>
            </>
          )}</>
  )
}

export default UserPopup