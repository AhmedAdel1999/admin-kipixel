import { Button } from "../../components/ui/button";
import shareimg from "../../assets/client/sidebar-logo.png"

const SettingPage = () =>{
    return(
        <div className="flex flex-col gap-6 bg-white p-6 rounded-lg">
            <h3 className="font-[600] text-lg capitalize">Personal info</h3>

            <div className="flex items-center gap-6">
               <div className="w-[60px] h-[60px] rounded-full">
                  <img src={shareimg} className="w-full h-full rounded-full" />
               </div>
               <div>
                  <input type="file" id="img-upload" className="hidden" />
                  <label htmlFor="img-upload" className="capitalize cursor-pointer text-[#1E43FA]">upload</label>
               </div>
               <span className="capitalize cursor-pointer text-[#757575]">delete</span>
            </div>

            <div className="border-b-[1px] bg-[#757575]"></div>

            <form className="flex flex-col gap-4">
                <div className="flex gap-4">

                    <div className="w-full flex flex-col gap-1">
                        <label className="capitalize">first name</label>
                        <input 
                        type="text"
                        className="px-4 py-2 border outline-none rounded-md text-[#757575]"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <label className="capitalize">last name</label>
                        <input 
                        type="text"
                        className="px-4 py-2 border outline-none rounded-md text-[#757575]"
                        />
                   </div>

                </div>
                <Button 
                   className="capitalize w-fit py-3 px-[45px] font-[600] !bg-inherit
                 text-[#1E43FA] text-[12px] border border-[#1E43FA]"
                >
                    save change
                </Button>
            </form>

            <div className="border-b-[1px] bg-[#757575]"></div>

            <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-[600] text-lg">Change password</h3>
                  <p className="max-w-[600px] text-sm text-[#757575]">
                    If you have forgotten your password or your account is connected using a social network,
                    you can set a password using the button below
                  </p>
                </div>
                <Button 
                   className="capitalize w-fit py-3 px-[45px] font-[600] !bg-inherit
                 text-[#1E43FA] text-[12px] border border-[#1E43FA]"
                >
                    Change password
                </Button>
            </div>

        </div>
    )
}
export default SettingPage;