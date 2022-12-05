import React, {useState} from 'react';

function NewTodoForm() {
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    return(
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input
                        type='text'
                        className='form-control'
                        required
                        onChange={e => setAssigned(e.target.value)}
                        value={assigned}
                        />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea
                        className='form-control'
                        rows={3}
                        required
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                        ></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3">Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm
