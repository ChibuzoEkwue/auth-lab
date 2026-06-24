import { redirect } from 'next/navigation';


const HomePage = () => {
  redirect("/auth/sign-in");
  // return (
  //   <div>
  //     <h1>Payout Threshold</h1>
  //   </div>
  // );
}

export default HomePage