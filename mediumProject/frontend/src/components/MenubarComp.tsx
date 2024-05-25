import { Link } from "react-router-dom"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { useNavigate } from "react-router-dom"

const MenubarComp = () => {
  const navigate = useNavigate()
  const signout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("nama")
    navigate("/signin")
  }

  const nama:any = localStorage.getItem('nama')
  return <div>
    <div className="flex justify-between py-4 px-7">
      <Link to={"/dashboard"} className="font-bold text-3xl">Medium</Link>
      <div className="flex justify-between">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <div className="py-1.5 w-8 h-8 bg-slate-600 text-sm text-white rounded-full cursor-pointer">{nama ? nama.slice(0,2).toUpperCase() : null}</div>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <div className="text-red-500" onClick={signout}>
                  Sign Out
                </div>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
    <hr />
  </div>
}

export default MenubarComp
