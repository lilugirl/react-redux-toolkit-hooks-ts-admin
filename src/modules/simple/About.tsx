import React from 'react';
import {useForm} from 'react-hook-form';
const About=()=>{
    const {register,handleSubmit,errors}=useForm();
    const onSubmit=(data:any)=>{
      console.log(data)
    }
    return (<div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="firstname" placeholder="first name" ref={register} />
            <input name="lastname" placeholder="last name" ref={register({required:true})} />
            {errors.lastname && 'Last name is required.'}
            <input name="age" placeholder="age" ref={register({pattern: /\d+/})} />
            {errors.age && 'Please enternumber for age.'}
            <input type="submit" />
        </form>

    </div>)
}

export default About;