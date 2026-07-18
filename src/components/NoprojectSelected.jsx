import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({onStartAddProject}){
    return <div className='mt-24 text-center w-2/3'>
        <img src={noProjectImage} 
        alt='empty task list' 
        className='w-16 h-16 object-contain mx-auto' 
        />
        <h2 className='text-xl font-bold text-stone-500 my-4'>No project Selected</h2>
        <p>Select a Project or start a new one</p>
        <p>
            <Button onClick={onStartAddProject}>Create a new Project</Button>
        </p>
    </div>
}