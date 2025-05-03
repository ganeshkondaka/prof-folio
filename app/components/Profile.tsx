'use client'
import { Dock, DockIcon } from '@/components/ui/dock'
import { Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiEnvelope } from 'react-icons/bi'
import { BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { CgSpinner } from 'react-icons/cg'
import { FaGithub } from 'react-icons/fa'

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Profile() {
    return (
        <div className='flex flex-row justify-center items-center px-4 pt-8 pb-5 xl:pb-4 md:py-14 max-w-5xl w-auto'>
            <div className='w-80 md:w-auto'>
                <h2 className='text-2xl font-bold md:text-6xl px-2'>Hi,I'm Ganesh 👋</h2>
                <p className='text-zinc-300 text-sm md:text-xl p-2'>A Fullstack dev , Blending Web dev and AI, and open source to build, break, and innovate!</p>
                <div className='flex flex-col lg:flex-row justify-between  lg:gap-2'>
                    <div className="relative " id="contact">
                        <Dock iconMagnification={60} iconDistance={100} className='border border-zinc-700'>
                            <DockIcon className="bg-black/10 dark:bg-white/10">
                                {/* <Icons.gitHub className="size-full" /> */}
                                <Link className="size-full" href="https://github.com/ganeshkondaka">
                                    <FaGithub className="size-full"></FaGithub>
                                </Link>

                            </DockIcon>
                            <DockIcon className="bg-black/10 dark:bg-white/10">
                                {/* <Icons.googleDrive className="size-full" /> */}
                                <Link className="size-full" href="https://x.com/ganesh_kondaka">
                                    <BsTwitterX className="size-full"></BsTwitterX>
                                </Link>

                            </DockIcon>
                            <DockIcon className="bg-black/10 dark:bg-white/10">
                                {/* <Icons.notion className="size-full" /> */}
                                <Link className="size-full" href="https://www.linkedin.com/in/kondaka-ganesh-b402bb252/">
                                    <BsLinkedin className="size-full"></BsLinkedin>
                                </Link>

                            </DockIcon>
                            <DockIcon className="bg-black/10 dark:bg-white/10">
                                {/* <Icons.whatsapp className="size-full" /> */}
                                <Link className="size-full" href="mailto:ganeshjo306@gmail.com">
                                    <BiEnvelope className="size-full"></BiEnvelope>
                                </Link>

                            </DockIcon>
                        </Dock>
                    </div>
                    <div>
                        <a href="/resume.pdf"
                            download
                            className="px-4 py-3 mt-2 inline-block border border-zinc-600 text-white font-semibold rounded-lg hover:bg-green-900  lg:mr-16 text-[10px] hover:scale-110 translate duration-200 ease-in-out">
                            <Download className="inline mr-2" size={16} />
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
            <div className='w-auto'>
                <Image src="/ganesh.png" alt="Ganesh" width={150} height={150} className='aspect-square rounded-3xl border p-1 border-zinc-700 hover:scale-110 translate duration-200 ease-in-out' />
            </div>
        </div>
    )
}
