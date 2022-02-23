export var Pattern;
(function (Pattern) {
    Pattern["FULLNAME"] = "[a-zA-Z .,]+$";
    Pattern["EMAIL"] = ".+@.+..+";
    Pattern["USERNAME"] = "[a-z0-9.]*$";
    Pattern["PHONE_NUMBER"] = "^(([+]([0-9]{1,2}))|([0-9]{1}))([0-9]{2}-?)([0-9]{4}-?)([0-9]{1,6}-?)$";
    Pattern["PASSWORD_MEDIUM"] = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([@$!%*?&]*)[A-Za-z0-9@$!%*?&]{8,}$";
    Pattern["PASSWORD_STRONG"] = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$";
    Pattern["LOCALE"] = "^en-US$|^id-ID$";
})(Pattern || (Pattern = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWNvcmUvc3JjL2xpYi9tb2RlbHMvcGF0dGVybnMvcGF0dGVybi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQU4sSUFBWSxPQVFYO0FBUkQsV0FBWSxPQUFPO0lBQ2YscUNBQTBCLENBQUE7SUFDMUIsNkJBQW1CLENBQUE7SUFDbkIsbUNBQXdCLENBQUE7SUFDeEIsa0dBQXVGLENBQUE7SUFDdkYsb0dBQXlGLENBQUE7SUFDekYsdUdBQTRGLENBQUE7SUFDNUYscUNBQTBCLENBQUE7QUFDOUIsQ0FBQyxFQVJXLE9BQU8sS0FBUCxPQUFPLFFBUWxCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gUGF0dGVybiB7XG4gICAgRlVMTE5BTUUgPSAnW2EtekEtWiAuLF0rJCcsXG4gICAgRU1BSUwgPSAnLitALitcXC4uKycsXG4gICAgVVNFUk5BTUUgPSAnW2EtejAtOS5dKiQnLFxuICAgIFBIT05FX05VTUJFUiA9ICdeKChbK10oWzAtOV17MSwyfSkpfChbMC05XXsxfSkpKFswLTldezJ9LT8pKFswLTldezR9LT8pKFswLTldezEsNn0tPykkJyxcbiAgICBQQVNTV09SRF9NRURJVU0gPSAnXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlswLTldKShbQCQhJSo/Jl0qKVtBLVphLXowLTlAJCElKj8mXXs4LH0kJyxcbiAgICBQQVNTV09SRF9TVFJPTkcgPSAnXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlswLTldKSg/PS4qW0AkISUqPyZdKVtBLVphLXowLTlAJCElKj8mXXs4LH0kJyxcbiAgICBMT0NBTEUgPSAnXmVuLVVTJHxeaWQtSUQkJyxcbn1cbiJdfQ==