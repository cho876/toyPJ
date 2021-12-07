package com.example.react_toyPJ.api.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.react_toyPJ.api.vo.User;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;

@Repository
public class UserDAO{

	// 데이터 전체조
	public List<User> getUsers() throws ExecutionException, InterruptedException{
		List<User> list = new ArrayList<>();
        Firestore db = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future = db.collection("userData").get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        for (QueryDocumentSnapshot document : documents) {
            list.add(document.toObject(User.class));
        }

		return list;
	}
	
	// 데이터 선택적 조회
	public User getUserByID(String userID) throws ExecutionException, InterruptedException{
		User resUser = new User();
        Firestore db = FirestoreClient.getFirestore();
       
        DocumentReference docRef = db.collection("userData").document(userID); 
        ApiFuture<DocumentSnapshot> future = docRef.get();
        DocumentSnapshot doc = future.get();
        
        resUser = doc.toObject(User.class);
        System.out.println("Edit User info: " + resUser.toString());

		return resUser;
	}
	
	// 데이터 추가
	public void addUser(User user) throws ExecutionException, InterruptedException{
        int maxIndex = 0;

		Firestore db = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> allFuture = db.collection("userData").get();
        List<QueryDocumentSnapshot> documents = allFuture.get().getDocuments();
        for (QueryDocumentSnapshot document : documents) {
        	System.out.println(">>>> 들어옴 : maxIndex: "+ maxIndex);
        	System.out.println(">>>> 들어옴 : ww: "+ document.toObject(User.class).getId());
            maxIndex = Math.max(document.toObject(User.class).getId(),maxIndex);
        }
        
        user.setId(maxIndex+1);
		ApiFuture<WriteResult> future = db.collection("userData").document(Integer.toString(user.getId())).set(user);
		System.out.println("Insert time : " + future.get().getUpdateTime());
	}
	
	// 데이터 수정
	public void editUser(User user) throws ExecutionException, InterruptedException{
        Firestore db = FirestoreClient.getFirestore();
		ApiFuture<WriteResult> future = db.collection("userData").document(Integer.toString(user.getId())).set(user);
		System.out.println("Update time : " + future.get().getUpdateTime());
	}
	
	// 데이터 삭제
	public void deleteUser(String userID) throws ExecutionException, InterruptedException{
        Firestore db = FirestoreClient.getFirestore();
		ApiFuture<WriteResult> future = db.collection("userData").document(userID).delete();
		System.out.println("Delete time : " + future.get().getUpdateTime());
	}
}
