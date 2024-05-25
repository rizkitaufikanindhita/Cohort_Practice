import ButtonComp from "./ButtonComp"

const SignupComponent = () => {
  return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-slate-300 p-10 rounded-md">
                <div className="font-bold text-3xl px-8">
                    Create an account
                </div>
                <div className="font-light mt-2 px-5">
                    Already have an account? 
                </div>
              <form id="signup-form">
                <div className="items-start text-left mt-4">
                    <div className="font-bold text-lg">
                        Username
                    </div>
                    <input className="mt-2" id="name" name='name' placeholder="Enter your username" required/>
                </div>
                <div className="items-start text-left mt-4">
                    <div className="font-bold text-lg">
                        Email
                    </div>
                    <input className="mt-2" id="email" name='email' placeholder="Johndoe@example.com" required/>
                </div>
              </form>
              <ButtonComp />
            </div>
        </div>
  )
}

export default SignupComponent
