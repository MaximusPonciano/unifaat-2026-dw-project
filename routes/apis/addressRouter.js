
import { CreaterAddressController } from "../../app/Controllers/AddressApi/CreateAddressController.js";
import { GetAddressController } from "../../app/Controllers/AddressApi/GetAddressControllers.js";
import { ListControllerAddress } from "../../app/Controllers/AddressApi/ListAddressControllers.js";
import { DeleteAddressController } from "../../app/Controllers/AddressApi/DeleteAddressController.js";
import { UpdateAddressController } from "../../app/Controllers/AddressApi/UpdateAddressController.js";
import { Router } from "express";

export default (() => {
    const router = Router();
    router.get('/', ListControllerAddress);
    router.get('/:id', GetAddressController);
    router.post('/', CreaterAddressController);
    router.delete('/:id', DeleteAddressController);
    router.put('/:id', UpdateAddressController);


    return router;
})();