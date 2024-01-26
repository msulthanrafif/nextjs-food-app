import Image from 'next/image'
import LogoIcon from "@/asset/image/icon/logo.svg"
import HomeIcon from "@/asset/image/icon/home.svg"
import DashboardIcon from "@/asset/image/icon/dashboard.svg"
import SettingIcon from "@/asset/image/icon/setting.svg"
import LogoutIcon from "@/asset/image/icon/logout.svg"


const Sidebar = () => {
    return (
        <>
            <div className="d-flex flex-column text-center p-2 rounded-3 h-100" style={{ backgroundColor: "#1F1D2B" }}>
                <div className="p-2 mb-3 btn">
                    <Image src={LogoIcon} alt="logo icon" />
                </div>
                <div className="p-2 mb-3 btn">
                    <Image src={HomeIcon} alt="home icon" />
                </div>
                <div className="p-2 mb-3 btn">
                    <Image src={DashboardIcon} alt="dashboard icon" />
                </div>
                <div className="p-2 btn">
                    <Image src={SettingIcon} alt="setting icon" />
                </div>
                <div className="mt-auto p-2 btn">
                    <Image src={LogoutIcon} alt="logout icon" />
                </div>
            </div>
        </>
    )
}
export default Sidebar