function HeaderOption({Icon, title, selected}) {
    return (
        <div className={`flex items-center space-x-1 border-b-[2px] border-transparent hover:text-blue-600 cursor-pointer hover:border-blue-600 pb-3 ${selected && "text-blue-600 border-blue-600"} `} >
            <Icon className="h-4" />
            <p className="hidden sm:inline-flex" >{title}</p>
        </div>
    )
}

export default HeaderOption;
