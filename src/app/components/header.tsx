import { Button, DropdownMenu } from "@radix-ui/themes";

export function Header() {
    return(
        <header className="flex flex-1 items-start justify-between gap-96">
            <div className="flex flex-1 items-start gap-8">
                
                <ul className="flex gap-4 items-center justify-center">
                    <li className="flex items-center justify-center">
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger className="outline-none">
                            <Button variant="soft" className="flex items-center gap-2 text-gray-500 font-medium p-2">
                                Features
                                <DropdownMenu.TriggerIcon />
                            </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content className=" z-10 bg-gray-100 p-4 rounded-md text-zinc-500 gap-2">
                                <DropdownMenu.Item className="outline-none">Todo List</DropdownMenu.Item>
                                <DropdownMenu.Item className="outline-none">Calendary</DropdownMenu.Item>
                                <DropdownMenu.Item className="outline-none">Reminders</DropdownMenu.Item>
                                <DropdownMenu.Item className="outline-none">Planning</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </li>
                    <li className="flex items-center justify-center">
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger className="outline-none">
                            <Button variant="soft" className="flex items-center gap-2 text-gray-500 font-medium p-2">
                                Company
                                <DropdownMenu.TriggerIcon />
                            </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content className=" z-10 bg-gray-100 p-4 rounded-md text-zinc-500 gap-2">
                                <DropdownMenu.Item className="outline-none">History</DropdownMenu.Item>
                                <DropdownMenu.Item className="outline-none">Our Team</DropdownMenu.Item>
                                <DropdownMenu.Item className="outline-none">Blog</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                         
                    </li>
                    <li >Careers</li>
                    <li>About</li>
                </ul>
            </div>

            <div>
                <ul className="flex gap-4 items-center justify-center">
                    <li className="text-slate-300 hover:text-black hover:cursor-pointer">Login</li>
                    <li>
                        <button className="border-2 border-silver 
                        rounded-lg p-1 w-24 hover:border-black text-slate-300 hover:text-black"
                        >
                            Register
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}