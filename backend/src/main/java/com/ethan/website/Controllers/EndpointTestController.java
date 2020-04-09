package com.ethan.website.Controllers;

import com.ethan.website.DTO.Customers;
import com.ethan.website.DTO.Endpoints;
import com.ethan.website.repositories.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/endpoints")
public class EndpointTestController {

    @Autowired
    private CustomerRepo customerRepo;

    @GetMapping("/")
    public Endpoints index() {
        return new Endpoints("Ethan", 19);
    }


    @GetMapping("/ethan")
    public Endpoints index2() {
        return new Endpoints("Ethan", 20);
    }

    @PutMapping(path = "/customers", consumes = "application/json", produces = "application/json")
    public void customer(@RequestBody Customers customer) {
        System.out.println(customer);
        customerRepo.save(customer);
    }

}