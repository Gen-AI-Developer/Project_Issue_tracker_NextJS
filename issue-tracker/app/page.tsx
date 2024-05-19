import Image from 'next/image'
import logo from '../app/public/logo.svg'
export default function Home() {
  return (
    <div className="flex flex-col m-3 p-4 border rounded-lg shadow-md bg-white items-center">

      <Image src={logo} alt='' width={150} height={150}></Image>
      <h1 className="text-xl font-bold">Developers Squad</h1>
      <p className="text-slate-700 dark:text-slate-500">Efficiently manage your team's tasks and projects with our cutting-edge
        issue tracking app. Designed for seamless collaboration, our platform
        simplifies the process of reporting, tracking, and resolving issues.
        Stay organized with real-time updates, customizable workflows, and
        intuitive dashboards, ensuring that every bug is fixed and every
        project stays on track. Empower your team to focus on what matters
        most, delivering high-quality results faster than ever before.</p>
    </div>
  )
}
