import {GlobeIcon} from "@heroicons/react/solid";

function Footer() {
    return (
        <footer className="grid w-full divide-y-[1px] divide-dark-300 bg-dark-800 text-sm text-dark-100" >
            <div className="px-4 py-3" >
                <p>INDIA</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3" >
                <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2" ><GlobeIcon className="h-5 mr-1 text-dark-600" />CARBON NEUTRAL SCINCE 2007</div>
                <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start" >
                    <p>ADVERTISING</p>
                    <p>BUISNESS</p>
                    <p>HOW SEARCH WORKS</p>
                </div>
                <div className="flex justify-center space-x-8 md:ml-auto" >
                    <p>PRIVACY</p>
                    <p>TERMS</p>
                    <p>SETTINGS</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
