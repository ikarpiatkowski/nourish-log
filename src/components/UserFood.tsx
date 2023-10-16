'use client';
// import { useAuth } from '@clerk/nextjs';
// import { useState } from 'react';
import ServerSearch from './ServerSearch';
export default function UserFood() {
  //   const [datePicker, setDatePicker] = useState('2023-06-21');
  //   const { userId } = useAuth();
  const datePicker: String = '2023-06-21';
  const userId: String = 'user_2PG9UFuURjUb0nQ2aQdHfM9kRMC';
  return (
    <>
      {/* <input
        className="p-5 m-5"
        type="date"
        onChange={(e) => setDatePicker(e.target.value)}
      /> */}
      <ServerSearch params={{ userId, datePicker }} />
    </>
  );
}
