<template>
    <form action="">
        <div class="field">
            <label class="label">Nom</label>
            <div class="control">
                <p 
                    class="notification is-danger" 
                    :errorControl="userInput.nameUser" 
                    v-if="userInput.nameUser.showError">{{userInput.nameUser.errMessage}}
                </p>
                <input 
                    class="input" 
                    type="text" 
                    placeholder="Sommavilla" 
                    v-model="userInput.nameUser.inputContent"
                    :class="{'is-danger': userInput.nameUser.showError, 'is-success': userInput.nameUser.validContent}" 
                    @focusout="checkInputName()"
                >
            </div>
        </div>
        <div class="field">
            <label class="label">Prenom</label>
            <div class="control" :class="{'has-icons-right': userInput.surnameUser.validContent}">
                <p 
                    class="notification is-danger" 
                    :errorControl="userInput.surnameUser" 
                    v-if="userInput.surnameUser.showError">{{userInput.surnameUser.errMessage}}
                </p>
                <input 
                    class="input" 
                    type="text" 
                    placeholder="Teddy" 
                    v-model="userInput.surnameUser.inputContent"
                    :class="{'is-danger': userInput.surnameUser.showError, 'is-success': userInput.surnameUser.validContent}" 
                    @focusout="checkTextInputSurname()"
                >
            </div>
        </div>
        <div class="field">
            <label class="label">Votre numéro de téléphone</label>
            <div class="control" :class="{'has-icons-right': userInput.phoneNumberUser.validContent}">
                <p 
                    class="notification is-danger" 
                    :errorControl="userInput.phoneNumberUser" 
                    v-if="userInput.phoneNumberUser.showError">{{userInput.phoneNumberUser.errMessage}}
                </p>
                <input 
                    class="input" 
                    type="text" 
                    placeholder="0648201256" 
                    :content="userInput.phoneNumberUser" 
                    :class="{'is-danger': userInput.phoneNumberUser.showError, 'is-success': userInput.phoneNumberUser.validContent}" 
                    v-model="userInput.phoneNumberUser.inputContent" 
                    @focusout="checkPhoneNumber()
                ">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <button class="button is-link" :disabled="isDisabled">Submit</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'FormTeddy',
    data: () => {
        return{
            isDisabled: true, 
            userInput: {
                nameUser: {
                    inputContent: '',
                    validContent: false,
                    showError: false,
                    errMessage: ''
                },
                surnameUser: {
                    inputContent: '',
                    validContent: false,
                    showError: false,
                    errMessage: ''
                },
                phoneNumberUser: {
                    inputContent: '',
                    validContent: false,
                    showError: false,
                    errMessage: ''
                }
            }
        }
    },
    methods: {
        containsLetter(strInput){
            return /([A-Z]|[a-z])/.test(strInput);
        },

        isFrPhoneNumber(strInput){
            const repzRegex = /^(0{0,2}|\+33\s?)[1-9]([-.\s]?[0-9]{2}){4}$/
            return repzRegex.test(strInput);
            // return /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(strInput);
        },

        updateErrorState(boolShowError, keyInput, strErrorMessage){
            this.userInput[keyInput].showError = boolShowError;
            this.userInput[keyInput].errMessage = strErrorMessage;
        },

        submitDisabled(){
            if(
                (!this.userInput.nameUser.showError && this.userInput.nameUser.inputContent !== '') 
                && (!this.userInput.surnameUser.showError && this.userInput.surnameUser.inputContent !== '')
                && (!this.userInput.phoneNumberUser.showError && this.userInput.phoneNumberUser.inputContent !== '')
            ){
                this.isDisabled = false;
            }else{
                this.isDisabled = true;
            }
        },

        checkPhoneNumber(){
            if(this.userInput.phoneNumberUser.inputContent === ''){
                this.updateErrorState(true, 'phoneNumberUser', 'Veuillez renseigner un numéro');
                this.userInput.phoneNumberUser.validContent = false;
            }else{
                if(this.containsLetter(this.userInput.phoneNumberUser.inputContent)){
                    this.updateErrorState(true, 'phoneNumberUser', 'Le numéro que vous avez renseigné ne doit contenir que des chiffres');
                    this.userInput.phoneNumberUser.validContent = false;
                }else if(!this.isFrPhoneNumber(this.userInput.phoneNumberUser.inputContent)){
                    this.updateErrorState(true, 'phoneNumberUser', 'Le numéro que vous avez renseigné ne correspond pas au format');
                    this.userInput.phoneNumberUser.validContent = false;
                }else{
                    this.updateErrorState(false, 'phoneNumberUser', '');
                    this.userInput.phoneNumberUser.validContent = true;
                }
            }

            this.submitDisabled();
        }, 

        checkTextInputSurname(){
            if(this.userInput.surnameUser.inputContent === ''){
                this.updateErrorState(true, 'surnameUser', 'Veuillez remplir ce champ');
                this.userInput.surnameUser.validContent = false;
            }else{
                this.updateErrorState(false, 'surnameUser', '');
                this.userInput.surnameUser.validContent = true;
            }
            
            this.submitDisabled();
        },

        checkInputName(){
            if(this.userInput.nameUser.inputContent === ''){
                this.updateErrorState(true, 'nameUser', 'Veuillez remplir ce champ');
                this.userInput.nameUser.validContent = false;
            }else{
                this.updateErrorState(false, 'nameUser', '');
                this.userInput.nameUser.validContent = true;
            }

            this.submitDisabled();
        },
    }
}
</script>

<style scoped>

</style>