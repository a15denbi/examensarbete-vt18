//
//  CategoryCell.swift
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-13.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//

import UIKit

class CategoryCell: UITableViewCell {
    
    @IBOutlet weak var categoryImage: UIImageView!
    @IBOutlet weak var categoryTitle: UILabel!

    func updateViews(category: Category) {
        categoryImage.image = UIImage(named: category.imageName)
        categoryTitle.text = category.title
    }

}
