//
//  ProductCell.swift
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-04-04.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//

import UIKit

class ProductCell: UICollectionViewCell {
    @IBOutlet weak var productImage: UIImageView!
    @IBOutlet weak var productTitle: UILabel!
    
    
    func updateViews(product: Product) {
        productImage.image = UIImage(named: product.imageName)
        productTitle.text = product.title
    }
}
