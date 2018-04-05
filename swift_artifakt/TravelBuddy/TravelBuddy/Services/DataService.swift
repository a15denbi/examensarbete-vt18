//
//  DataService.swift
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-13.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//

import Foundation

class DataService {
    // Creates a singleton === only one instance of the class is instantiated
    static let instance = DataService()
    
    // local arrayFunction of the UITableView elements, categories-section
    private let categories = [
        Category(title: "Santorini", imageName: "greece1.jpeg"),
        Category(title: "London", imageName: "london1.jpeg"),
        Category(title: "Paris", imageName: "paris1.jpg")
    ]
    
    private let greece = [
        Product(title: "Santorini in Greece", imageName: "greece2.jpeg")
    ]
    
    private let london = [
        Product(title: "London in Great Britain", imageName: "london2.jpg")
    ]
    
    private let paris = [
        Product(title: "Paris in France", imageName: "paris2.jpeg")
    ]
    
    func getCategories() -> [Category] {
        return categories
    }
    
    func getProducts(forCategoryTitle title:String) -> [Product] {
        switch title {
        case "Santorini":
           return getGreece()
        case "London":
           return getLondon()
        case "Paris":
           return getParis()
        default:
           return getGreece()
        }
    }
    
    func getGreece() -> [Product] {
        return greece
    }
    
    func getLondon() -> [Product] {
        return london
    }
    
    func getParis() -> [Product] {
        return paris
    }
}
