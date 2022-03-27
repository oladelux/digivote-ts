import { Field } from 'formik';
import { TextField } from 'formik-mui';
import FormSteps, { FormStep } from '../../components/FormStep';

interface Values {
   firstName: string,
   lastName: string,
   email: string,
   organization: string
 }

const CreateBallotTemplate: React.VFC = () => {

   return (
      <div>
         <FormSteps
            initialValues={{
               firstName: '',
               lastName: '',
               email: '',
               organization: ''
            }}
            validate={(values) => {
               const errors: Partial<Values> = {};
               if (!values.email) {
                 errors.email = 'Email is required';
               } else if (
                 !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
               ) {
                 errors.email = 'Invalid email address';
               }
               return errors;
            }}
            onSubmit={() => {}}>
            <FormStep label="Personal Details">
               <div className='py-4'><Field fullWidth name="firstName" component={TextField} label="First Name" /></div>
               <div className='py-4'><Field fullWidth name="lastName" component={TextField} label="Last Name" /></div>
               <div className='py-4'><Field fullWidth name="email" component={TextField} type="email" label="Email" /></div>
               <div className='py-4'><Field fullWidth name="organization" component={TextField} label="Organization" /></div>
            </FormStep>
            <FormStep label="Ballot Details">
               <div className='py-4'><Field fullWidth name="ballotName" component={TextField} label="Ballot Name" /></div>
               <div className='py-4'><Field fullWidth name="description" component={TextField} label="Election Notes" /></div>
            </FormStep>
         </FormSteps>
      </div>
   )
}

export default CreateBallotTemplate
