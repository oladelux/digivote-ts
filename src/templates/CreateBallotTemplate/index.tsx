import { Field, FormikProps } from "formik";
import { TextField } from "formik-mui";
import FormSteps, { FormStep } from "../../components/FormStep";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  ballotName: string;
  description: string;
}

const wait = (time: number) => new Promise((res) => setTimeout(res, time));
const CreateBallotTemplate: React.VFC<FormikProps<Values>> = () => {
  const initialValues: Values = {
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    ballotName: "",
    description: "",
  };
  return (
    <div className="w-3/4 bg-white py-8 px-6 mx-auto my-8 pb-4 min-h-[570px] relative">
      <h1 className="text-center pb-8">Create your ballot</h1>
      <FormSteps
        initialValues={initialValues}
        validate={(values: Partial<Values>) => {
          const errors: Partial<Values> = {};
          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={async (data) => {
          await wait(3000);
          console.log("Data", data);
        }}
      >
        <FormStep label="Personal Details">
          <div className="py-4">
            <Field
              fullWidth
              name="firstName"
              component={TextField}
              label="First Name"
            />
          </div>
          <div className="py-4">
            <Field
              fullWidth
              name="lastName"
              component={TextField}
              label="Last Name"
            />
          </div>
          <div className="py-4">
            <Field
              fullWidth
              name="email"
              component={TextField}
              type="email"
              label="Email"
            />
          </div>
          <div className="py-4">
            <Field
              fullWidth
              name="organization"
              component={TextField}
              label="Organization"
            />
          </div>
        </FormStep>
        <FormStep label="Ballot Details">
          <div className="py-4">
            <Field
              fullWidth
              name="ballotName"
              component={TextField}
              label="Ballot Name"
            />
          </div>
          <div className="py-4">
            <Field
              fullWidth
              name="description"
              component={TextField}
              label="Election Notes"
            />
          </div>
        </FormStep>
        <FormStep label="Preview"></FormStep>
      </FormSteps>
    </div>
  );
};

export default CreateBallotTemplate;
