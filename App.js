import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useForm, Controller } from "react-hook-form";


export default function App() {

  const { control, handleSubmit, formState:{ errors } } = useForm({
    defaultValues: {
      fullname: '',
      phone: '',
      age: '',
      email: '',
      password: '',
    }
  });
  
  const onSubmit = (dataForm) =>{
    console.log(dataForm);
    const {fullname , email} = dataForm;  
    console.log(fullname);
  }
  
  return (
    <View style={styles.container}>

    <Text variant="displayLarge"
    >
    REGISTRO
    </Text>

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
            placeholder='Fullname'
            label="Fullname"
          />
        )}
        name="fullname"
      />
     {errors.fullname?.type == 'required' && <Text>Campo obligatorio</Text>}
     {errors.fullname?.type == 'maxlength' && <Text>obligatorio max 30 chars</Text>}
     {errors.fullname?.type == 'minlength' && <Text>obligatorio min 2 chars</Text>}
     {errors.fullname?.type == 'pattern' && <Text>no debe tener letras o espacios</Text>}
<Controller
        control={control}
        rules={{
         required: true,
         maxLength:30,
         minLength:2,
         pattern:"^[0-9]+$",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            mode='outlined'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
            placeholder='Age'
            label="Age"
          />
        )}
        name="age"
      />
     {errors.age?.type == 'required' && <Text>Campo obligatorio</Text>}
     {errors.age?.type == 'maxlength' && <Text>obligatorio max 30 chars</Text>}
     {errors.age?.type == 'minlength' && <Text>obligatorio min 2 chars</Text>}
     {errors.age?.type == 'pattern' && <Text>no debe tener letras o espacios</Text>}
<Controller
        control={control}
        rules={{
         required: true,
         maxLength:30,
         minLength:2,
         pattern:"^[0-9]+$",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            mode='outlined'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Phone'
            label="Phone"
          />
        )}
        name="phone"
      />
     {errors.phone?.type == 'required' && <Text>Campo obligatorio</Text>}
     {errors.phone?.type == 'maxlength' && <Text>obligatorio max 30 chars</Text>}
     {errors.phone?.type == 'minlength' && <Text>obligatorio min 2 chars</Text>}
     {errors.phone?.type == 'pattern' && <Text>no debe tener letras o espacios</Text>}
<Controller
        control={control}
        rules={{
         required: true,
         maxLength:30,
         minLength:2,
         pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            mode='outlined'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='email'
            label="email"

          />
        )}
        name="email"
      />
     {errors.email?.type == 'required' && <Text>Campo obligatorio</Text>}
     {errors.email?.type == 'maxlength' && <Text>obligatorio max 30 chars</Text>}
     {errors.email?.type == 'minlength' && <Text>obligatorio min 2 chars</Text>}
     {errors.email?.type == 'pattern' && <Text>no debe tener letras o espacios</Text>}
     

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
            secureTextEntry={true}
            mode='outlined'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Password'
            label='Password'
          />
        )}
        name="password"
      />
     {errors.password?.type == 'required' && <Text>Campo obligatorio</Text>}
     {errors.password?.type == 'maxlength' && <Text>obligatorio max 30 chars</Text>}
     {errors.password?.type == 'minlength' && <Text>obligatorio min 2 chars</Text>}
     {errors.password?.type == 'pattern' && <Text>no debe tener letras o espacios</Text>}


     <Button icon="send" mode="contained" onPress={handleSubmit(onSubmit)}>
         Registrar
      </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23588f',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
