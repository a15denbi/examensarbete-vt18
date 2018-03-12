//
//  ImageListScreen.swift
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-02.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//

import UIKit

class ImageListScreen: UIViewController {
    
    @IBOutlet weak var tableView: UITableView!
    
    var images: [Image] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
       
        images = createArray()
    }
    
    func createArray() -> [Image] {
    
        var tempImages: [Image] = []
    
        let image1 = Image(image: #imageLiteral(resourceName: "greece1"), title: "Santorini")
        let image2 = Image(image: #imageLiteral(resourceName: "greece2"), title: "The Beach")
        let image3 = Image(image: #imageLiteral(resourceName: "greece3"), title: "Beautiful Streets")
        let image4 = Image(image: #imageLiteral(resourceName: "greece4"), title: "Boat Cruise")
    
        tempImages.append(image1)
        tempImages.append(image2)
        tempImages.append(image3)
        tempImages.append(image4)
    
        return tempImages
    }
}

extension ImageListScreen: UITableViewDataSource, UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return images.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let image = images[indexPath.row]
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "ImageCell") as! ImageCell
        
        cell.setImage(image: image)
        
        return cell
    }
}
