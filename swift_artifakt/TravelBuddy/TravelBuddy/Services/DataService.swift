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
    
    func getCategories() -> [Category] {
        return categories
    }
}
