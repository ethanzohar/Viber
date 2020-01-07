package com.ethan.website.Controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.HashMap;
import java.util.Map;

@RestController
public class EndpointTestController {

    @RequestMapping("/endpoint")
    public Map<String, String> index() {
        Map<String, String> map = new HashMap<>();
        map.put("Name", "Ethan");
        map.put("Age", "19");

        return map;
    }

}