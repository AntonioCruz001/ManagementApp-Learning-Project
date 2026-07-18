import Input from "./Input"
import Modal from "./Modal";
import { useRef } from "react"

export default function NewProject({ onAdd, onCancel }) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDueDate = dueDate.current.value

        if (enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            modal.current.open();
            return
        }

        // argumentos passados para handleAddProject como obj
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }


    return <>
        <Modal ref={modal} buttonCaption='Close'>
            <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid input.</h2>
        </Modal>
        <div className="w-[35rem] mt-16">
        <menu className="flex itens-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
            <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
            <Input type="text" ref={title} label="Title" />
            {/* textarea é interpretado como true */}
            <Input ref={description} label="Description" textarea />
            <Input type="date" ref={dueDate} label="Due Date" />
        </div>
    </div>
    </>
}