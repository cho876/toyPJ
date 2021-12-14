package com.example.react_toyPJ.config;

import java.io.FileInputStream;

import javax.annotation.PostConstruct;

import org.springframework.context.annotation.Configuration;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@Configuration
public class FirebaseConfiguration {

	@PostConstruct
	public void init() {
		try {
			FileInputStream serviceAccount = new FileInputStream("/Users/skcho/git/toy_pj/react_toyPJ/src/main/resources/serviceAccount.json");
			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials.fromStream(serviceAccount))
					.build();
			FirebaseApp.initializeApp(options);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
