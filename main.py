import requests
import pandas
import math
import numpy as np
import xlsxwriter


#The base of this program was taken from this tutorial on how to access the Riot Games API which I found very helpful!
#https://www.youtube.com/watch?v=ml0lKDU5JvY

#Only used to learn how the API works.
#def requestSummonerData(region, summonerName, APIKey):
    #URL = "https://" + region + ".api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + summonerName + "?api_key=" + APIKey
    #print(URL)
    #response = requests.get(URL)
    #return response.json()

#Only used to learn how the API works.
#def requestRankedData(region, ID, APIKey):
    #URL = "https://" + region + ".api.pvp.net/api/lol/na/v2.5/league/by-summoner/" + ID + "/entry?api_key=" + APIKey
    #print(URL)
    #response = requests.get(URL)
    #return response.json()

#Returns a JSON object containing data pertaining to all the champions in the game as well as their skin type
def getChampionData(region, APIKey):
    URL = "https://" + region + ".api.pvp.net/api/lol/static-data/" + region + "/v1.2/champion" + "?champData=skins&" + "api_key=" + APIKey
    response = requests.get(URL)
    return response.json()

#This program will make an HTML Document containing all the skins I own. All of the image source links will be found and then appended
#to this HTML Document for further use on my website.
def main():
        #Only used to learn how the API Works
        #summonerName = "blaze5545"
        #responseJSON = requestSummonerData(region, summonerName, APIKey)
        #ID = responseJSON[summonerName]['id']
        #ID = str(ID)
        #responseJSON2 = requestRankedData(region, ID, APIKey)
        #print(responseJSON2[ID][0]['tier'])
        #print(responseJSON2[ID][0]['entries'][0]['division'])
        #print(responseJSON2[ID][0]['entries'][0]['leaguePoints'])
        #********************Start Program************************
        #Used in my getChampionData function. API Key has been commented out for security reasons.
        region = "na"
        APIKey = "API KEY"
        #Will store the skins I own read in from an excel worksheet
        skins_list = []
        champion_names = []
        #These temp lists were used to write my new excel worksheet.
        champion_names_temp = []
        skins_list_temp = [[]]
        #The base URL for every skin is this. This program will be searching for the rest of the
        #url to complete and making a HTML Document containing all the url links to the skins I currently own.
        #skin_url = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"
        skin_url = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"
        output_url_list = [[]]
        #Reading in the excel file, removing all NaN/empty cell values and replacing them with empty string
        #spreadsheet = raw_input("Please enter an excel file name: ")
        df = pandas.read_excel('test.xlsx')
        df = df.replace(np.nan,' ', regex=True)
        values = df['Champion'].index
        champ_name = ""
        count = 0
        for index, row in df.iterrows():
            #Intialzie my temporary skin list
            skins_list_temp_initialize = []
            skins_list_temp.append(skins_list_temp_initialize)
            for x in range (1,10):
                #As long as its not an empty string its a skin name.
                if(row[x] != ' '):
                    skins_list.append(row[x])
                    skins_list_temp[count].append(row[x])
            #Row[0] is always the champion name.
            champion_names_temp.append(row[0])
            count += 1;
        test = getChampionData(region, APIKey)
        #For the Splash URLs we can't use the direct champion names but instead the champion names riot uses
        #which is what this function finds. For example Aurelion Sol is known as AurelionSol
        for i in test['data']:
            champion_names.append(i)
        #This list will be used to remove skins as they are found to reduce the run time 
        list_to_be_removed = []
        #Loops through each champion form the JSON object
        print(output_url_list)
        index_to_insert = 0;
        bool_found = False
        for x in range (0, len(champion_names)):
            #Returns a list for a specific champion + their skins
            #Initializing second list
            output_url_initialize_list = []
            #Loading default skin for each champ
            #output_url_initialize_list.append("<img src=" + skin_url + champion_names[x] + "_0.jpg" + ">")
            output_url_initialize_list.append(champion_names[x])
            #I use an insertion sort here to make the final output list ordered.
            if(x == 0):
                output_url_list[x] = output_url_initialize_list
            else:
                for y in range(0, len(output_url_list)):
                    if(output_url_list[y][0] > champion_names[x]):
                        #print(output_url_list[y][0], champion_names[x])
                        index_to_insert = y
                        bool_found = True
                        break
                if bool_found == False:
                    index_to_insert = x
                    output_url_list.append(output_url_initialize_list)
                else:
                    output_url_list.insert(index_to_insert, output_url_initialize_list)
            #if(x < 2):
                #print(output_url_list)
            list = test['data'][champion_names[x]]['skins']
            for y in range(0, len(list)):
                for z in range(0, len(skins_list)):
                    #Checks to see if this champion has any skins that I own, and if yes appends the url to
                    #my output_url list as well as puts the skin in the to be removed list.
                    if(skins_list[z] == list[y]['name']):
                        output_url_list[index_to_insert].append("<img src=" + skin_url + champion_names[x] + '_' + str(list[y]['num']) + ".jpg" + ">")
            bool_found = False
            #if(x < 3):
                #print(list)
                #print(output_url_list)
                        #list_to_be_removed.append(skins_list[z])
                #for z in range (0, len(list_to_be_removed) - 1):
                    #skins_list.remove(list_to_be_removed[z])
                #del list_to_be_removed[:]
        #Used for Debugging
        #print(test['data']['Anivia']['skins'])
        #list = test['data']['Anivia']['skins']
        #for x in range(0, len(list) - 1):
            #print(list[x])
        #print(output_url_list)
        #print(champion_names_temp)
        #print(skins_list_temp)
        
        #My first idea was to write the Skin + Champion name to a textfile then manually edit the excel document with the
        #updated names, however I realized I could use a similar method as what I was doing and just write directly to a new
        #excel worksheet.
        out = open("names.txt", "w+")
        for x in range(0, len(champion_names_temp)):
            for z in range(0, len(skins_list_temp[x])):
                out.write(skins_list_temp[x][z] + " " + champion_names_temp[x])
                skins_list_temp[x][z] = skins_list_temp[x][z] + " " + champion_names_temp[x]
                out.write("\n")
        out.write("hello")
        #print(skins_list_temp)
        #I was going to use a dataframe/pandas method but I decided to use xlsxwriter as I had used a similar method 
        #when making my database applicaiton.
        #d = {'Champion': champion_names_temp}
        #df1 = pandas.DataFrame(columns = "Champion": champion_names_temp)
        #writer = ExcelWriter('output.xlsx')
        #df1.to_excel(writer,'Blaze5545')
        #writer.save()

        #I had just written the first part of the skin names, for example for Goth Annie I just wrote goth, and for the
        #check above I needed the exact skin name so this function takes the first spreadsheet I made and appends the
        #champion name after it. Of course for some skins, like Snowmerdinger, the name itself was correct/Snowermerdinger
        #Heimerdinger would be incorrect so I had to manually look over the spreadsheet.
        workbook = xlsxwriter.Workbook('test2.xlsx')
        sheet1 = workbook.add_worksheet("Blaze5545")
        sheet1.write(0, 0, "Champion")
        for x in range(1, len(champion_names_temp) + 1):
            sheet1.write(x, 0, champion_names_temp[x - 1])
            for y in range(0, len(skins_list_temp[x-1])):
                sheet1.write(x, y + 1, skins_list_temp[x-1][y])
        workbook.close()
        #Creating my html files
        #print(output_url_list)
        #sorted(output_url_list, key=lambda x: x[1])
        out2 = open("league_skins.html", "w+")
        out2.write("<!DOCTYPE html> \n")
        out2.write("<html> \n")
        #Nav Bar
        out2.write("""<head>
<link rel="stylesheet" type="text/css" href="stylesheets/nav_bar.css"> 
</head> 
<nav> 
  <ul> 
    <li><a href="book_reviews.html">Book Reviews</a></li> 
    <li><a href='gre_vocab.html'>GRE Vocab</a></li> 
    <li><a href='index.html'>Index</a></li> 
    <li><a href="league_skins.html">League Skins</a></li> 
    <li><a href='photos.html'>Photos</a></li> 
    <li><a href='projects.html'>Projects</a></li> 
    <li><a href='volunteering.html'>Volunteering</a></li> 
  </ul> 
</nav> \n \n""")
        for x in range(0, len(output_url_list)):
            for z in range(0, len(output_url_list[x])):
                if(z == 0):
                    out2.write("<img src=" + skin_url + output_url_list[x][z] + "_0.jpg" + ">")
                else:
                    out2.write(output_url_list[x][z])
                out2.write("\n")
            out2.write("<br />")
            out2.write("\n")
        out2.write("</html>")
if __name__ == "__main__":
    main()
