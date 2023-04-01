import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useForm, Controller } from "react-hook-form";



export default function App() {

  const { control, handleSubmit, formState:{ errors } } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phone: '',
      passsword: '',
      age: '',
    }
  });

  const onSubmit = (dataForm) =>{
    console.log(dataForm);
    const {fullname , email} = dataForm;  
    console.log(fullname);
  }

  return (
    <View style={styles.container}>

<Controller
        control={control}
        rules={{
         required: true,
         maxLength:30,
         minLength:2,
         pattern:"/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            mode='outlined'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullname"
      />
     {errors.fullname?.type == 'required' && <Text>obligatorio</Text>}
     {errors.fullname?.type == 'maxlength' && <Text>obligatorio max 30 chars</Text>}
     {errors.fullname?.type == 'minlength' && <Text>obligatorio min 2 chars</Text>}
     {errors.fullname?.type == 'pattern' && <Text>no debe tener letras o espacios</Text>}

     <Button icon="send" mode="contained" onPress={handleSubmit(onSubmit)}>
         enviar
      </Button>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
