import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSelector } from "react-redux"
import Comment from "./Comments"
import { Info } from "lucide-react"
import { Switch } from "./ui/switch"

export function CommentSettingDialog({ on, setOn }) {
    const { comments } = useSelector(store => store.comment)
    return (
        <Dialog open={on}>
            <DialogContent onInteractOutside={() => setOn(false)} className="max-w-4xl p-0 flex flex-col  bg-[#2b2a2ab5]">
                <div className="">
                    <div className="text-2xl font-bold text-white p-3 bg-black "><p>Filter Comments</p></div>
                    <div className="flex w-full">
                        <div className="border-r-[#bbacf2] border-r-[0.5px] w-[40%]">
                            <div className='flex-col-reverse flex-1 overflow-y-scroll max-h-[25.5rem] ml-5'>
                                {(
                                    comments.map((comment) => <Comment key={comment?._id} comment={comment} />)
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-[60%]">
                            <div className="right  p-5 flex flex-col gap-4">
                                <div className="p-3 border-2 border-[#565151ec] rounded-xl">
                                    <div className="flex justify-between">
                                        <p className="text-2xl font-semibold">Hide Spam</p>
                                        <div className=""><Switch /></div>
                                    </div>
                                    <p className="flex items-center text-white opacity-50 text-xs w-[60%] mt-2">
                                        <Info />
                                        <p className="ml-2">Detects Spam comments and hide them from others only you are able to see them</p>
                                    </p>
                                </div>
                                <div className="p-3 border-2 border-[#565151ec] rounded-xl">
                                    <div className="flex justify-between">
                                        <p className="text-2xl font-semibold">Hide Abuse</p>
                                        <div className=""><Switch /></div>
                                    </div>
                                    <p className="flex items-center text-white opacity-50 text-xs w-[60%] mt-2">
                                        <Info />
                                        <p className="ml-2">Detects Abusive comments and hide them from others only you are able to see them</p>
                                    </p>
                                </div>
                                <div className="p-3 border-2 border-[#565151ec] rounded-xl">
                                    <div className="flex justify-between">
                                        <p className="text-2xl font-semibold">Hide Specific Keyword</p>
                                        <div className=""><Switch /></div>
                                    </div>
                                    <p className="flex items-center text-white opacity-50 text-xs w-[60%] mt-2">
                                        <Info />
                                        <p className="ml-2">Detects specific comments and hide them from others only you are able to see them</p>
                                    </p>
                                    <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
                                        <Input type="text" placeholder="Enter Word" className="h-8" />
                                        <Button type="submit" variant="outline" className="h-8">Hide</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog >
    )
}
