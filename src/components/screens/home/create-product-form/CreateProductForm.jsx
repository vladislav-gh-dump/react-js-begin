import { useForm } from 'react-hook-form';
import styles from './CreateProductForm.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductService } from '../../../../services/product.service';
// import { useState } from "react";


// const initFormData = {
//     name: '', 
//     price: '', 
//     photoUrl: '',
// }

const CreateProductForm = () => {
    const { register, reset, handleSubmit } = useForm({
        mode: 'onChange',
    })

    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationKey: ["create car"],
        mutationFn: (data) => ProductService.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries('products')
            reset()
        }
    })

    const createProduct = (data) => {
        mutate({...data})
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(createProduct)}>
            <input 
                {...register('name', { required: "Name is required" })}
                className='input'
                placeholder='Name' 
            />
            <input 
                {...register('price', { required: "Price is required" })}
                className='input'
                placeholder='Price' 
            />
            <input 
                {...register('photoUrl', { required: "Price is required" })}
                className='input'
                placeholder='Photo URL' 
            />

            <button className="btn">Create</button>
        </form>
    )
}


// const CreateProductForm = ({ setProducts }) => {
//     const [formData, setFormData] = useState(initFormData)

//     const createProduct = (e) => {
//         e.preventDefault();

//         setProducts(prev => [...prev, {
//             id: prev.length + 1, ...formData
//         }])

//         setFormData(initFormData)
//     }

//     return (
//         <form className={styles.form}>
//             <input 
//                 className='input'
//                 placeholder='Name' 
//                 onChange={e => setFormData(prev => ({
//                     ...prev, name: e.target.value
//                 }))}
//                 value={formData.name}
//             />
//             <input 
//                 className='input'
//                 placeholder='Price' 
//                 onChange={e => setFormData(prev => ({
//                     ...prev, price: e.target.value
//                 }))}
//                 value={formData.price}    
//             />
//             <input 
//                 className='input'
//                 placeholder='Photo URL' 
//                 onChange={e => setFormData(prev => ({
//                     ...prev, photoUrl: e.target.value
//                 }))}
//                 value={formData.photoUrl}
//             />

//             <button className="btn" onClick={e => createProduct(e)}>Create</button>
//         </form>
//     )
// }

export default CreateProductForm;