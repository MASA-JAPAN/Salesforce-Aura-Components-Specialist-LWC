public with sharing class BoatSearchResultsController {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId) {
        String sql  = 'SELECT Id, Name ,BoatType__c, Picture__c, Contact__r.Name, ';
               sql += ' Geolocation__Latitude__s, Geolocation__Longitude__s ';
               sql += ' FROM Boat__c ';
        if( !String.isBlank(boatTypeId)) {
            sql += ' where BoatType__c = \''+ boatTypeId +'\'';
        }
        List<Boat__c> boatList = Database.query(sql);
        return boatList;        
    }
}